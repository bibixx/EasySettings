import EasySettings from "../EasySettings";

export default class EasySettingsMovementManager {
  constructor(panel, header) {
    this.panel = panel;
    this.header = header;
    this.startPos = {
      x: 0,
      y: 0,
    };

    this.startPosOfPanel = {
      x: 8,
      y: 0,
    };

    this.handleMovement = this.handleMovement.bind(this);
    this.bindEvents();
  }

  bindEvents() {
    this.header.addEventListener("mousedown", (e) => {
      this.startPos = {
        x: e.pageX,
        y: e.pageY,
      };

      const panelOffset = this.panel.getBoundingClientRect();
      this.startPosOfPanel = {
        x: panelOffset.left,
        y: panelOffset.top,
      };

      this.panel.style.zIndex = EasySettings.getCurrentZIndex();

      document.addEventListener("mousemove", this.handleMovement);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", this.handleMovement);
      });
    });
  }

  handleMovement(e) {
    this.panel.style.left = `${this.startPosOfPanel.x + (e.pageX - this.startPos.x)}px`;
    this.panel.style.top = `${this.startPosOfPanel.y + (e.pageY - this.startPos.y)}px`;
  }
}
