function SoftEngineeringClass(className,classUnit,classCapacity,property){
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity
    this.property = null

}


function NetworkClass(className,classUnit,classCapacity){
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity
}

const theSoftEngineeringClass = new SoftEngineeringClass("softEngineering",3,50)
console.log(theSoftEngineeringClass)

const theNetworkClass = new NetworkClass("network ",3,30)
console.log(theNetworkClass)

//الف