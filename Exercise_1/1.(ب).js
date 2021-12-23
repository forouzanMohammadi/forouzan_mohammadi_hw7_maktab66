function SoftEngineeringClass(className,classUnit,classCapacity,property){
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity
    this.property = null
    if (this.property){
        this.property = property
    }
    else{
        this.property = property
    }
}
function NetworkClass(className,classUnit,classCapacity,project){
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity
    this.project = project
    if (this.project){
        this.project = project
    }
    else{
        this.project = null
    }
}
const theSoftEngineeringClass = new SoftEngineeringClass("softEngineering",3,50,"book")
console.log(theSoftEngineeringClass)

const theNetworkClass = new NetworkClass("network ",3,30,true)
console.log(theNetworkClass)
