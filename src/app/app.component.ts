import { Component, OnInit } from '@angular/core'
declare const fabric: any

const RECT_STROKE_WIDTH = 5
const RECT_STROKE_COLOR = 'black'
const RECT_FILL_COLOR = 'rgba(0,0,0,0)'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  canvas: any

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', { selection: false })
    new fabric.Image.fromURL('https://images.unsplash.com/photo-1523834347582-1a5b9ef3419b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80', (img: any) => {
      img.scale(0.8)
      img.set('selectable', false)
      this.canvas.add(img)
    }) 
    this.canvas.renderAll()
  }

  public onClear() {
    const elements = this.canvas.getObjects()
    elements.length > 1 && this.canvas.remove(...elements.slice(1))
  }

  public addBox() {
    const box = this.createBox({ top: 100, left: 100})
    this.canvas.add(box)
    this.canvas.renderAll()

    box.on('mousedblclick', () => {
      const coords = box.getCoords()
      const width = coords[1].x - coords[0].x - RECT_STROKE_WIDTH
      const height = coords[3].y - coords[0].y - RECT_STROKE_WIDTH
      const { x: left, y: top} = coords[0]
      const n = 10
      const horizontalSegment = height / n
      for (let i = 0; i < n; i++) {
        this.canvas.add(this.createBox({
          width,
          height: horizontalSegment,
          left,
          top: i * horizontalSegment + top,
          strokeWidth: 2
        }))
      }
      this.canvas.renderAll()
    })
  }

  public save() {
    console.log(this.canvas.toJSON())
  }

  public removeElement() {
    this.canvas.remove(this.canvas.getActiveObject())
  }

  private createBox({
    height = 100,
    width = 100, 
    top = 0,
    left = 0,
    fill = RECT_FILL_COLOR, 
    stroke = RECT_STROKE_COLOR, 
    strokeWidth = RECT_STROKE_WIDTH}): any {
    return new fabric.Rect({
      height,
      width,
      top,
      left,
      fill,
      stroke,
      strokeWidth,
      strokeUniform: true,
    })
  }
}
