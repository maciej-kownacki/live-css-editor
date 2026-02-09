import type { ElementInfo } from '../types/editor.types';

type ElementSelectedCallback = (element: HTMLElement, similar: HTMLElement[]) => void;

export class InspectModeHandler {
  private isActive = false;
  private highlightOverlay: HTMLDivElement | null = null;
  private onElementSelected?: ElementSelectedCallback;
  private onElementHovered?: (info: ElementInfo) => void;

  enable(callbacks: {
    onSelected: ElementSelectedCallback;
    onHovered?: (info: ElementInfo) => void;
  }) {
    this.isActive = true;
    this.onElementSelected = callbacks.onSelected;
    this.onElementHovered = callbacks.onHovered;
    this.createHighlightOverlay();

    // Listen to mousemove on entire document (user's app)
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('click', this.handleClick, true); // Capture phase
    document.body.style.cursor = 'crosshair';
  }

  disable() {
    this.isActive = false;
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('click', this.handleClick, true);
    document.body.style.cursor = '';

    if (this.highlightOverlay) {
      this.highlightOverlay.remove();
      this.highlightOverlay = null;
    }
  }

  private handleMouseMove = (e: MouseEvent) => {
    if (!this.isActive) return;

    const target = e.target as HTMLElement;

    // Skip if hovering over CSS Editor panel itself
    if (target.closest('[data-css-editor-panel]')) {
      if (this.highlightOverlay) {
        this.highlightOverlay.style.display = 'none';
      }
      return;
    }

    const rect = target.getBoundingClientRect();

    // Update highlight overlay position
    this.updateHighlight(rect);

    // Notify hover callback
    if (this.onElementHovered) {
      this.onElementHovered({
        element: target,
        selector: this.generateSelector(target),
        styles: getComputedStyle(target),
        rect
      });
    }
  };

  private handleClick = (e: MouseEvent) => {
    if (!this.isActive) return;

    const target = e.target as HTMLElement;

    // Skip if clicking on CSS Editor panel
    if (target.closest('[data-css-editor-panel]')) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    // Find similar elements in DOM
    const similar = this.findSimilarElements(target);

    // Notify callback (updates editor UI)
    if (this.onElementSelected) {
      this.onElementSelected(target, similar);
    }

    // Disable inspect mode after selection
    this.disable();
  };

  private createHighlightOverlay() {
    this.highlightOverlay = document.createElement('div');
    this.highlightOverlay.style.cssText = `
      position: fixed;
      pointer-events: none;
      border: 2px solid #3b82f6;
      background: rgba(59, 130, 246, 0.1);
      z-index: 2147483646;
      transition: all 0.1s ease;
    `;
    document.body.appendChild(this.highlightOverlay);
  }

  private updateHighlight(rect: DOMRect) {
    if (!this.highlightOverlay) return;

    this.highlightOverlay.style.display = 'block';
    this.highlightOverlay.style.top = `${rect.top}px`;
    this.highlightOverlay.style.left = `${rect.left}px`;
    this.highlightOverlay.style.width = `${rect.width}px`;
    this.highlightOverlay.style.height = `${rect.height}px`;
  }

  private findSimilarElements(target: HTMLElement): HTMLElement[] {
    const similar: HTMLElement[] = [];
    const targetStyles = getComputedStyle(target);

    const criteria = {
      tagName: target.tagName,
      className: target.className,
      role: target.getAttribute('role'),
      computedStyles: ['display', 'position', 'font-size', 'padding', 'border-radius']
    };

    document.querySelectorAll(criteria.tagName).forEach(el => {
      if (el === target || !(el instanceof HTMLElement)) return;

      // Skip CSS Editor elements
      if (el.closest('[data-css-editor-panel]')) return;

      let matchScore = 0;

      // Class match
      if (el.className === criteria.className && criteria.className) {
        matchScore += 3;
      }

      // Role match
      if (el.getAttribute('role') === criteria.role && criteria.role) {
        matchScore += 2;
      }

      // Computed styles match
      const elStyles = getComputedStyle(el);
      criteria.computedStyles.forEach(prop => {
        if (elStyles.getPropertyValue(prop) === targetStyles.getPropertyValue(prop)) {
          matchScore += 1;
        }
      });

      // If score >= 5, consider similar
      if (matchScore >= 5) {
        similar.push(el);
      }
    });

    return similar;
  }

  private generateSelector(el: HTMLElement): string {
    // Generate unique, efficient selector
    if (el.id) {
      return `#${el.id}`;
    }

    let selector = el.tagName.toLowerCase();

    if (el.className) {
      const classes = Array.from(el.classList)
        .filter(c => !c.startsWith('live-css-editor-')) // Skip editor classes
        .join('.');

      if (classes) {
        selector += '.' + classes;
      }
    }

    // Add nth-child if not unique
    if (document.querySelectorAll(selector).length > 1) {
      const parent = el.parentElement;
      if (parent) {
        const index = Array.from(parent.children).indexOf(el) + 1;
        selector += `:nth-child(${index})`;
      }
    }

    return selector;
  }
}
