// src/index.js
class MascotOverlay {
    constructor(options = {}) {
        this.options = {
            mascotImage: options.mascotImage || '',
            overlayImage: options.overlayImage || '',
            overlayWidth: options.overlayWidth || '800px',
            overlayOpacity: options.overlayOpacity || 0.8,
            transitionDuration: options.transitionDuration || 300,
            position: options.position || { bottom: '4%', right: '20px' },
            mascotSize: options.mascotSize || { width: '140px', height: '90px' },
            zIndex: options.zIndex || 9999999,
            ...options
        };

        this.overlayVisible = false;
        this.init();
    }

    init() {
        this.createStyles();
        this.createElements();
        this.attachEvents();
    }

    createStyles() {
        if (document.getElementById('mascot-overlay-styles')) return;

        const style = document.createElement('style');
        style.id = 'mascot-overlay-styles';
        style.textContent = `
      .mascot-overlay-container {
        position: fixed;
        bottom: ${this.options.position.bottom};
        right: ${this.options.position.right};
        z-index: ${this.options.zIndex};
        margin: 0;
        padding: 0;
      }

      .mascot-overlay-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
        width: ${this.options.mascotSize.width};
        height: ${this.options.mascotSize.height};
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: visible;
      }

      .mascot-overlay-img {
        width: 100%;
        height: auto;
        transition: transform ${this.options.transitionDuration}ms ease, 
                    filter ${this.options.transitionDuration}ms ease;
        cursor: pointer;
        display: block;
      }

      .mascot-overlay-btn:hover .mascot-overlay-img {
        transform: scale(1.15) rotate(3deg);
        filter: drop-shadow(0 0 10px rgba(0, 150, 255, 0.5));
      }

      .mascot-overlay-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, ${this.options.overlayOpacity});
        z-index: ${this.options.zIndex - 1};
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity ${this.options.transitionDuration}ms ease,
                    visibility ${this.options.transitionDuration}ms ease;
      }

      .mascot-overlay-backdrop.active {
        opacity: 1;
        visibility: visible;
      }

      .mascot-overlay-content {
        max-width: 90%;
        max-height: 90vh;
        transform: scale(0.8);
        opacity: 0;
        transition: transform ${this.options.transitionDuration}ms ease,
                    opacity ${this.options.transitionDuration}ms ease;
      }

      .mascot-overlay-backdrop.active .mascot-overlay-content {
        transform: scale(1);
        opacity: 1;
      }

      .mascot-overlay-detail-img {
        max-width: ${this.options.overlayWidth};
        width: 100%;
        height: auto;
        display: block;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }

      @media (max-width: 768px) {
        .mascot-overlay-detail-img {
          max-width: 95vw;
        }
        
        .mascot-overlay-container {
          bottom: 2%;
          right: 10px;
        }
      }
    `;

        document.head.appendChild(style);
    }

    createElements() {
        this.container = document.createElement('div');
        this.container.className = 'mascot-overlay-container';

        this.button = document.createElement('button');
        this.button.className = 'mascot-overlay-btn';
        this.button.setAttribute('aria-label', 'Show system details');

        this.mascotImg = document.createElement('img');
        this.mascotImg.className = 'mascot-overlay-img';
        this.mascotImg.src = this.options.mascotImage;
        this.mascotImg.alt = 'Mascot';

        this.backdrop = document.createElement('div');
        this.backdrop.className = 'mascot-overlay-backdrop';
        this.backdrop.setAttribute('role', 'dialog');
        this.backdrop.setAttribute('aria-modal', 'true');

        this.contentWrapper = document.createElement('div');
        this.contentWrapper.className = 'mascot-overlay-content';

        this.detailImg = document.createElement('img');
        this.detailImg.className = 'mascot-overlay-detail-img';
        this.detailImg.src = this.options.overlayImage;
        this.detailImg.alt = 'System Details';

        this.button.appendChild(this.mascotImg);
        this.container.appendChild(this.button);
        this.contentWrapper.appendChild(this.detailImg);
        this.backdrop.appendChild(this.contentWrapper);

        document.body.appendChild(this.container);
        document.body.appendChild(this.backdrop);
    }

    attachEvents() {
        this.button.addEventListener('mouseenter', () => this.showOverlay());
        this.button.addEventListener('mouseleave', () => this.hideOverlay());
        this.backdrop.addEventListener('click', (e) => {
            if (e.target === this.backdrop) {
                this.hideOverlay();
            }
        });

        this.backdrop.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideOverlay();
            }
        });
    }

    showOverlay() {
        this.overlayVisible = true;
        this.backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    hideOverlay() {
        this.overlayVisible = false;
        this.backdrop.classList.remove('active');
        document.body.style.overflow = '';
    }

    destroy() {
        if (this.container) this.container.remove();
        if (this.backdrop) this.backdrop.remove();
        const styleEl = document.getElementById('mascot-overlay-styles');
        if (styleEl) styleEl.remove();
    }

    updateImages(mascotImage, overlayImage) {
        if (mascotImage) this.mascotImg.src = mascotImage;
        if (overlayImage) this.detailImg.src = overlayImage;
    }
}

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MascotOverlay;
}
if (typeof define === 'function' && define.amd) {
    define([], () => MascotOverlay);
}
if (typeof window !== 'undefined') {
    window.MascotOverlay = MascotOverlay;
}
