declare const fabric: any

fabric.Box = fabric.util.createClass(fabric.Rect, {
    type: 'Box',
    
    initialize: function(element: any, options: any) {
        this.callSuper('initialize', element, options)
        options && this.set('name', options.name)
    },

    toObject: function() {
        return fabric.util.object.extend(this.callSuper('toObject'), { name: this.name })
    }
})

fabric.Box.fromObject = function(object: any, callback: Function) {
    return fabric.Object._fromObject('Box', object, callback)
}

fabric.Canvas.prototype.getItemsByName = function(name: string) {
    const objectList = [], objects = this.getObjects()
    for (let i = 0, len = this.size(); i < len; i++) {
        if (objects[i].name && objects[i].name === name) {
        objectList.push(objects[i])
        }
    }
    return objectList
}

export default fabric