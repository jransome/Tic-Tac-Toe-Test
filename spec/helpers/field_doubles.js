function FieldClassDouble(){}

var fieldDouble = jasmine.createSpyObj('field', ['claim', 'claimedBy']);
fieldDouble.claimedBy.and.callFake(function(){ return null; });

var fieldDoubleWithX = jasmine.createSpyObj('field', ['claim', 'claimedBy']);
fieldDoubleWithX.claimedBy.and.callFake(function(){ return xMarkerDouble; });

var fieldDoubleWithO = jasmine.createSpyObj('field', ['claim', 'claimedBy']);
fieldDoubleWithO.claimedBy.and.callFake(function(){ return oMarkerDouble; });
