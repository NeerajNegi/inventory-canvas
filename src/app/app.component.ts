import { Component, OnInit } from '@angular/core'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateBoxDialogComponent } from './create-box-dialog/create-box-dialog.component';
import { GenerateSmallBoxDialogComponent } from './generate-small-box-dialog/generate-small-box-dialog.component';

import fabric from './models/Box'

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
  oldCanvas: any

  constructor(public dialog: MatDialog) {}

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

  public openAddBoxDialog() {

    const dialogRef = this.dialog.open(CreateBoxDialogComponent, {
      width: '300px',
      data: {title: 'Create'}
    })

    dialogRef.afterClosed().subscribe(result => {
      result && this.addBox(result)
    })
  }

  public openSearchBoxDialog() {

    const dialogRef = this.dialog.open(CreateBoxDialogComponent, {
      width: '300px',
      data: {title: 'Search'}
    })

    dialogRef.afterClosed().subscribe(result => {
      result && this.search(result)
    })
  }

  private addBox(name: string) {
    const box = this.createBox({ top: 100, left: 100, name})
    this.canvas.add(box)
    this.canvas.renderAll()

    box.on('mousedblclick', () => {

      const dialogRef = this.dialog.open(GenerateSmallBoxDialogComponent, {
        width: '300px'
      })
  
      dialogRef.afterClosed().subscribe(result => {
        result && this.generateMultiplesBoxes(box, result)
      })
    })
  }

  private generateMultiplesBoxes(object: any, boxCount: number) {
    const coords = object.getCoords()
    const width = coords[1].x - coords[0].x - RECT_STROKE_WIDTH
    const height = coords[3].y - coords[0].y - RECT_STROKE_WIDTH
    const { x: left, y: top} = coords[0]
    const horizontalSegment = height / boxCount
    for (let i = 0; i < boxCount; i++) {
      this.canvas.add(this.createBox({
        width,
        height: horizontalSegment,
        left,
        top: i * horizontalSegment + top,
        strokeWidth: 2
      }))
    }
    this.canvas.renderAll()
  }

  private search(name: string) {
    this.canvas.setActiveObject(this.canvas.getBoxByName(name))
    this.canvas.renderAll()
  }

  public loadCanvas() {
    this.canvas.loadFromJSON(this.oldCanvas, this.canvas.renderAll.bind(this.canvas), (o: any, object: any) => {
      if (object.type === 'image') {
        object.set('selectable', false)
      }
    })
  }

  public save() {
    console.log(this.canvas.toJSON())
    this.oldCanvas = JSON.stringify(this.canvas)
  }

  public removeElement() {
    this.canvas.remove(this.canvas.getActiveObject())
  }

  private createBox({
    height = 100,
    width = 100, 
    top = 0,
    left = 0,
    name = '',
    fill = RECT_FILL_COLOR, 
    stroke = RECT_STROKE_COLOR,
    strokeWidth = RECT_STROKE_WIDTH}): any {
    return new fabric.Box({
      height,
      width,
      top,
      left,
      fill,
      stroke,
      strokeWidth,
      strokeUniform: true,
      cornerStyle: 'circle',
      borderColor: 'red',
      cornerSize: 12,
      cornerColor: 'red',
    }, {
      name
    })
  }
}