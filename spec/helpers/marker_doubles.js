var markerDouble = jasmine.createSpyObj('marker', ['isCross']);

var xMarkerDouble = jasmine.createSpyObj('marker', ['isCross']);
xMarkerDouble.isCross.and.callFake(function(){ return true; });

var oMarkerDouble = jasmine.createSpyObj('marker', ['isCross']);
oMarkerDouble.isCross.and.callFake(function(){ return false; });
