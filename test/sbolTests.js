
const constellation = require('../lib/constellation');
const expect = require('chai').expect;

var DESIGN_NAME = 'design';
const CATEGORIES = '{"rbs":["a1","a2"],"cds":["b1","b2","b3"],"promoter":["c1"], "terminator": ["t"]}';

function trim(str) {
  return str.replace(/\s/g, "X");

}


module.exports = function() {
//
describe('SBOL Generation: basic operators', function() {
  it('atom', function() {
    let result = constellation(DESIGN_NAME, 'rbs', CATEGORIES, 10, 0);
    expect(trim(result.sbol)).to.equal('<?xmlXversion="1.0"Xencoding="UTF-8"?>X<rdf:RDFXxmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"Xxmlns:dcterms="http://purl.org/dc/terms/"Xxmlns:prov="http://www.w3.org/ns/prov#"Xxmlns:sbol="http://sbols.org/v2#"Xxmlns:xsd="http://www.w3.org/2001/XMLSchema#dateTime/">XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/rbs/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/rbs"/>XXXXX<sbol:displayId>rbs</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/a1/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/a1"/>XXXXX<sbol:displayId>a1</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/a2/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/a2"/>XXXXX<sbol:displayId>a2</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/design/root_template/design/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design"/>XXXXX<sbol:displayId>design</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXXXX<sbol:component>XXXXXXX<sbol:ComponentXrdf:about="http://constellationcad.org/design/root_template/design/rbs_component/1">XXXXXXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design/rbs_component"/>XXXXXXXXX<sbol:displayId>rbs_component</sbol:displayId>XXXXXXXXX<sbol:version>1</sbol:version>XXXXXXXXX<sbol:definitionXrdf:resource="http://constellationcad.org/generic_definition/rbs/1"/>XXXXXXXXX<sbol:accessXrdf:resource="http://sbols.org/v2#public"/>XXXXXXX</sbol:Component>XXXXX</sbol:component>XXX</sbol:ComponentDefinition>XXX<sbol:CombinatorialDerivationXrdf:about="http://constellationcad.org/design/root_template/design/design_combinatorial_derivation/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design/design_combinatorial_derivation"/>XXXXX<sbol:displayId>design_combinatorial_derivation</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:templateXrdf:resource="http://constellationcad.org/design/root_template/design/1"/>XXXXX<sbol:variableComponent>XXXXXXX<sbol:VariableComponentXrdf:about="http://constellationcad.org/design/root_template/design/design_combinatorial_derivation/rbs_component_variable/1">XXXXXXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design/design_combinatorial_derivation/rbs_component_variable"/>XXXXXXXXX<sbol:displayId>rbs_component_variable</sbol:displayId>XXXXXXXXX<sbol:version>1</sbol:version>XXXXXXXXX<sbol:variableXrdf:resource="http://constellationcad.org/design/root_template/design/rbs_component/1"/>XXXXXXXXX<sbol:operatorXrdf:resource="http://sbols.org/v2#one"/>XXXXXXXXX<sbol:variantXrdf:resource="http://constellationcad.org/generic_definition/a1/1"/>XXXXXXXXX<sbol:variantXrdf:resource="http://constellationcad.org/generic_definition/a2/1"/>XXXXXXX</sbol:VariableComponent>XXXXX</sbol:variableComponent>XXX</sbol:CombinatorialDerivation>X</rdf:RDF>');
  });  
});

describe('SBOL Generation: combination specs', function() {
  it('one-or-more (promoter or rbs) then (zero-or-more cds) then terminator', function() {
    let result = constellation(DESIGN_NAME, 'one-or-more (promoter or rbs) then (zero-or-more cds) then terminator', CATEGORIES, 10, 0);
    expect(trim(result.sbol)).to.equal('<?xmlXversion="1.0"Xencoding="UTF-8"?>X<rdf:RDFXxmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"Xxmlns:dcterms="http://purl.org/dc/terms/"Xxmlns:prov="http://www.w3.org/ns/prov#"Xxmlns:sbol="http://sbols.org/v2#"Xxmlns:xsd="http://www.w3.org/2001/XMLSchema#dateTime/">XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/promoter/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/promoter"/>XXXXX<sbol:displayId>promoter</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXXXX<sbol:roleXrdf:resource="http://identifiers.org/so/SO:0000167"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/c1/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/c1"/>XXXXX<sbol:displayId>c1</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/rbs/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/rbs"/>XXXXX<sbol:displayId>rbs</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/a1/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/a1"/>XXXXX<sbol:displayId>a1</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/a2/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/a2"/>XXXXX<sbol:displayId>a2</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/cds/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/cds"/>XXXXX<sbol:displayId>cds</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXXXX<sbol:roleXrdf:resource="http://identifiers.org/so/SO:0000316"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/b1/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/b1"/>XXXXX<sbol:displayId>b1</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/b2/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/b2"/>XXXXX<sbol:displayId>b2</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/b3/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/b3"/>XXXXX<sbol:displayId>b3</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/terminator/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/terminator"/>XXXXX<sbol:displayId>terminator</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXXXX<sbol:roleXrdf:resource="http://identifiers.org/so/SO:0000141"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/generic_definition/t/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/generic_definition/t"/>XXXXX<sbol:displayId>t</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/design/cyclical_unit1/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/cyclical_unit1"/>XXXXX<sbol:displayId>cyclical_unit1</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/design/combinatorial_template/cyclical_unit1/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/combinatorial_template/cyclical_unit1"/>XXXXX<sbol:displayId>cyclical_unit1</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXXXX<sbol:component>XXXXXXX<sbol:ComponentXrdf:about="http://constellationcad.org/design/combinatorial_template/cyclical_unit1/or_unit1_component/1">XXXXXXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/combinatorial_template/cyclical_unit1/or_unit1_component"/>XXXXXXXXX<sbol:displayId>or_unit1_component</sbol:displayId>XXXXXXXXX<sbol:version>1</sbol:version>XXXXXXXXX<sbol:definitionXrdf:resource="http://constellationcad.org/design/or_unit1/1"/>XXXXXXXXX<sbol:accessXrdf:resource="http://sbols.org/v2#public"/>XXXXXXX</sbol:Component>XXXXX</sbol:component>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/design/or_unit1/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/or_unit1"/>XXXXX<sbol:displayId>or_unit1</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXX</sbol:ComponentDefinition>XXX<sbol:ComponentDefinitionXrdf:about="http://constellationcad.org/design/root_template/design/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design"/>XXXXX<sbol:displayId>design</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:typeXrdf:resource="http://identifiers.org/so/SO:0000804"/>XXXXX<sbol:component>XXXXXXX<sbol:ComponentXrdf:about="http://constellationcad.org/design/root_template/design/cyclical_unit1_component/1">XXXXXXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design/cyclical_unit1_component"/>XXXXXXXXX<sbol:displayId>cyclical_unit1_component</sbol:displayId>XXXXXXXXX<sbol:version>1</sbol:version>XXXXXXXXX<sbol:definitionXrdf:resource="http://constellationcad.org/design/cyclical_unit1/1"/>XXXXXXXXX<sbol:accessXrdf:resource="http://sbols.org/v2#public"/>XXXXXXX</sbol:Component>XXXXX</sbol:component>XXXXX<sbol:component>XXXXXXX<sbol:ComponentXrdf:about="http://constellationcad.org/design/root_template/design/cds_component/1">XXXXXXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design/cds_component"/>XXXXXXXXX<sbol:displayId>cds_component</sbol:displayId>XXXXXXXXX<sbol:version>1</sbol:version>XXXXXXXXX<sbol:definitionXrdf:resource="http://constellationcad.org/generic_definition/cds/1"/>XXXXXXXXX<sbol:accessXrdf:resource="http://sbols.org/v2#public"/>XXXXXXX</sbol:Component>XXXXX</sbol:component>XXXXX<sbol:component>XXXXXXX<sbol:ComponentXrdf:about="http://constellationcad.org/design/root_template/design/terminator_component/1">XXXXXXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design/terminator_component"/>XXXXXXXXX<sbol:displayId>terminator_component</sbol:displayId>XXXXXXXXX<sbol:version>1</sbol:version>XXXXXXXXX<sbol:definitionXrdf:resource="http://constellationcad.org/generic_definition/terminator/1"/>XXXXXXXXX<sbol:accessXrdf:resource="http://sbols.org/v2#public"/>XXXXXXX</sbol:Component>XXXXX</sbol:component>XXXXX<sbol:sequenceConstraint>XXXXXXX<sbol:SequenceConstraintXrdf:about="http://constellationcad.org/design/root_template/design/design_sequence_constraint1/1">XXXXXXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design/design_sequence_constraint1"/>XXXXXXXXX<sbol:displayId>design_sequence_constraint1</sbol:displayId>XXXXXXXXX<sbol:version>1</sbol:version>XXXXXXXXX<sbol:restrictionXrdf:resource="http://sbols.org/v2#precedes"/>XXXXXXXXX<sbol:subjectXrdf:resource="http://constellationcad.org/design/root_template/design/cyclical_unit1_component/1"/>XXXXXXXXX<sbol:objectXrdf:resource="http://constellationcad.org/design/root_template/design/cds_component/1"/>XXXXXXX</sbol:SequenceConstraint>XXXXX</sbol:sequenceConstraint>XXXXX<sbol:sequenceConstraint>XXXXXXX<sbol:SequenceConstraintXrdf:about="http://constellationcad.org/design/root_template/design/design_sequence_constraint2/1">XXXXXXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design/design_sequence_constraint2"/>XXXXXXXXX<sbol:displayId>design_sequence_constraint2</sbol:displayId>XXXXXXXXX<sbol:version>1</sbol:version>XXXXXXXXX<sbol:restrictionXrdf:resource="http://sbols.org/v2#precedes"/>XXXXXXXXX<sbol:subjectXrdf:resource="http://constellationcad.org/design/root_template/design/cds_component/1"/>XXXXXXXXX<sbol:objectXrdf:resource="http://constellationcad.org/design/root_template/design/terminator_component/1"/>XXXXXXX</sbol:SequenceConstraint>XXXXX</sbol:sequenceConstraint>XXX</sbol:ComponentDefinition>XXX<sbol:CombinatorialDerivationXrdf:about="http://constellationcad.org/design/combinatorial_template/cyclical_unit1/cyclical_unit1_combinatorial_derivation/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/combinatorial_template/cyclical_unit1/cyclical_unit1_combinatorial_derivation"/>XXXXX<sbol:displayId>cyclical_unit1_combinatorial_derivation</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:templateXrdf:resource="http://constellationcad.org/design/combinatorial_template/cyclical_unit1/1"/>XXXXX<sbol:variableComponent>XXXXXXX<sbol:VariableComponentXrdf:about="http://constellationcad.org/design/combinatorial_template/cyclical_unit1/cyclical_unit1_combinatorial_derivation/or_unit1_component_variable/1">XXXXXXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/combinatorial_template/cyclical_unit1/cyclical_unit1_combinatorial_derivation/or_unit1_component_variable"/>XXXXXXXXX<sbol:displayId>or_unit1_component_variable</sbol:displayId>XXXXXXXXX<sbol:version>1</sbol:version>XXXXXXXXX<sbol:variableXrdf:resource="http://constellationcad.org/design/combinatorial_template/cyclical_unit1/or_unit1_component/1"/>XXXXXXXXX<sbol:operatorXrdf:resource="http://sbols.org/v2#one"/>XXXXXXXXX<sbol:variantXrdf:resource="http://constellationcad.org/generic_definition/a1/1"/>XXXXXXXXX<sbol:variantXrdf:resource="http://constellationcad.org/generic_definition/a2/1"/>XXXXXXXXX<sbol:variantXrdf:resource="http://constellationcad.org/generic_definition/c1/1"/>XXXXXXX</sbol:VariableComponent>XXXXX</sbol:variableComponent>XXX</sbol:CombinatorialDerivation>XXX<sbol:CombinatorialDerivationXrdf:about="http://constellationcad.org/design/root_template/design/design_combinatorial_derivation/1">XXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design/design_combinatorial_derivation"/>XXXXX<sbol:displayId>design_combinatorial_derivation</sbol:displayId>XXXXX<sbol:version>1</sbol:version>XXXXX<sbol:templateXrdf:resource="http://constellationcad.org/design/root_template/design/1"/>XXXXX<sbol:variableComponent>XXXXXXX<sbol:VariableComponentXrdf:about="http://constellationcad.org/design/root_template/design/design_combinatorial_derivation/cyclical_unit1_component_variable/1">XXXXXXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design/design_combinatorial_derivation/cyclical_unit1_component_variable"/>XXXXXXXXX<sbol:displayId>cyclical_unit1_component_variable</sbol:displayId>XXXXXXXXX<sbol:version>1</sbol:version>XXXXXXXXX<sbol:variableXrdf:resource="http://constellationcad.org/design/root_template/design/cyclical_unit1_component/1"/>XXXXXXXXX<sbol:operatorXrdf:resource="http://sbols.org/v2#oneOrMore"/>XXXXXXXXX<sbol:variantDerivationXrdf:resource="http://constellationcad.org/design/combinatorial_template/cyclical_unit1/cyclical_unit1_combinatorial_derivation/1"/>XXXXXXX</sbol:VariableComponent>XXXXX</sbol:variableComponent>XXXXX<sbol:variableComponent>XXXXXXX<sbol:VariableComponentXrdf:about="http://constellationcad.org/design/root_template/design/design_combinatorial_derivation/cds_component_variable/1">XXXXXXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design/design_combinatorial_derivation/cds_component_variable"/>XXXXXXXXX<sbol:displayId>cds_component_variable</sbol:displayId>XXXXXXXXX<sbol:version>1</sbol:version>XXXXXXXXX<sbol:variableXrdf:resource="http://constellationcad.org/design/root_template/design/cds_component/1"/>XXXXXXXXX<sbol:operatorXrdf:resource="http://sbols.org/v2#zeroOrMore"/>XXXXXXXXX<sbol:variantXrdf:resource="http://constellationcad.org/generic_definition/b1/1"/>XXXXXXXXX<sbol:variantXrdf:resource="http://constellationcad.org/generic_definition/b2/1"/>XXXXXXXXX<sbol:variantXrdf:resource="http://constellationcad.org/generic_definition/b3/1"/>XXXXXXX</sbol:VariableComponent>XXXXX</sbol:variableComponent>XXXXX<sbol:variableComponent>XXXXXXX<sbol:VariableComponentXrdf:about="http://constellationcad.org/design/root_template/design/design_combinatorial_derivation/terminator_component_variable/1">XXXXXXXXX<sbol:persistentIdentityXrdf:resource="http://constellationcad.org/design/root_template/design/design_combinatorial_derivation/terminator_component_variable"/>XXXXXXXXX<sbol:displayId>terminator_component_variable</sbol:displayId>XXXXXXXXX<sbol:version>1</sbol:version>XXXXXXXXX<sbol:variableXrdf:resource="http://constellationcad.org/design/root_template/design/terminator_component/1"/>XXXXXXXXX<sbol:operatorXrdf:resource="http://sbols.org/v2#one"/>XXXXXXXXX<sbol:variantXrdf:resource="http://constellationcad.org/generic_definition/t/1"/>XXXXXXX</sbol:VariableComponent>XXXXX</sbol:variableComponent>XXX</sbol:CombinatorialDerivation>X</rdf:RDF>')
  });

  it('Spec for paper', function() {
    let result = constellation(DESIGN_NAME, 'one-or-more(one-or-more(promoter then cds)then cds then (zero-or-more (cds or (one-or-more (cds then promoter then cds) then cds)) then (terminator or (terminator then cds) or (cds then terminator)))))', CATEGORIES, 10, 0);

    // currently result.sbol is undefined

  });
});

}