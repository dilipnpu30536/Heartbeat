// Sample data (replace this with your data)
const data = [
    { planHead: '1600', particular: 'Traffic Facility', actual: '324026', Utilization:'82.9',OBG:'303940', AE:'25201',Var:'-51939' ,Capital_OBG:'245001', Capital_AE:'234429', Capital_Var:'-10572', Capital_Utilization:'95.68', DRF_OBG:'0', DRF_AE:'0', DRF_Var:'0', DRF_Utilization:'0',DF_OBG:'0', DF_AE:'0', DF_Var:'0', DF_Utilization:'', SF_OBG:'0', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'58939', RRSK_AE:'17572', RRSK_Var:'-41367', RRSK_Utilization:'29.81', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0' },
    {  planHead: '1700', particular: 'Computerization', actual: '0', Utilization:'0',OBG:'0', AE:'0',Var:'0', Capital_OBG:'', Capital_AE:'0', Capital_Var:'0',Capital_Utilization:'0', DRF_OBG:'0', DRF_AE:'0', DRF_Var:'0', DRF_Utilization:'0',DF_OBG:'0', DF_AE:'0', DF_Var:'0', DF_Utilization:'0', SF_OBG:'0', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'0', RRSK_AE:'0', RRSK_Var:'0', RRSK_Utilization:'0', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0'  },
    { planHead: '2100', particular: 'Rolling stock', actual: '8177', Utilization:'87',OBG:'23358', AE:'20325',Var:'-3033',Capital_OBG:'23358', Capital_AE:'20325', Capital_Var:'-3033',Capital_Utilization:'87.02', DRF_OBG:'0', DRF_AE:'0', DRF_Var:'0', DRF_Utilization:'0',DF_OBG:'0', DF_AE:'0', DF_Var:'0', DF_Utilization:'0', SF_OBG:'0', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'0', RRSK_AE:'0', RRSK_Var:'0', RRSK_Utilization:'0', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0' },
    { planHead: '2900', particular: 'Road safety work', actual: '60052', Utilization:'24.6',OBG:'39536', AE:'9726',Var:'-29810',Capital_OBG:'0', Capital_AE:'0', Capital_Var:'0',Capital_Utilization:'0', DRF_OBG:'0', DRF_AE:'0', DRF_Var:'0', DRF_Utilization:'0',DF_OBG:'0', DF_AE:'0', DF_Var:'0', DF_Utilization:'0', SF_OBG:'39536', SF_AE:'9726', SF_Var:'-29810', SF_Utilization:'24.6', RRSK_OBG:'0', RRSK_AE:'0', RRSK_Var:'0', RRSK_Utilization:'0', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0' },
    { planHead: '3000', particular: 'Road over bridge', actual: '2969', Utilization:'11.7',OBG:'146750', AE:'17165',Var:'-129585',Capital_OBG:'0', Capital_AE:'0', Capital_Var:'0',Capital_Utilization:'0', DRF_OBG:'0', DRF_AE:'0', DRF_Var:'0', DRF_Utilization:'0',DF_OBG:'0', DF_AE:'0', DF_Var:'0', DF_Utilization:'0', SF_OBG:'38250', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'108500', RRSK_AE:'17165', RRSK_Var:'-91335', RRSK_Utilization:'15.82', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0' },
    { planHead: '3100', particular: 'Track reneval', actual: '1245586', Utilization:'32.6',OBG:'1110000', AE:'361824',Var:'-748176',Capital_OBG:'0', Capital_AE:'0', Capital_Var:'0',Capital_Utilization:'0', DRF_OBG:'0', DRF_AE:'0', DRF_Var:'0', DRF_Utilization:'0',DF_OBG:'0', DF_AE:'0', DF_Var:'0', DF_Utilization:'0', SF_OBG:'1082700', SF_AE:'355877', SF_Var:'-726823', SF_Utilization:'32.87', RRSK_OBG:'27300', RRSK_AE:'5947', RRSK_Var:'-21353', RRSK_Utilization:'21.78', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0'},
    { planHead: '3200', particular: 'Bridge work', actual: '30227', Utilization:'47.9',OBG:'33965', AE:'16276',Var:'-17689',Capital_OBG:'0', Capital_AE:'0', Capital_Var:'0',Capital_Utilization:'0', DRF_OBG:'0', DRF_AE:'0', DRF_Var:'0', DRF_Utilization:'0',DF_OBG:'0', DF_AE:'0', DF_Var:'0', DF_Utilization:'0', SF_OBG:'0', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'33965', RRSK_AE:'16276', RRSK_Var:'-17689', RRSK_Utilization:'47.92', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0' },
    { planHead: '3300', particular: 'S & T', actual: '258494', Utilization:'66.3',OBG:'126001', AE:'83490',Var:'-42511',Capital_OBG:'111500', Capital_AE:'21233', Capital_Var:'-90267',Capital_Utilization:'19.04', DRF_OBG:'0', DRF_AE:'0', DRF_Var:'0', DRF_Utilization:'0',DF_OBG:'0', DF_AE:'0', DF_Var:'0', DF_Utilization:'0', SF_OBG:'0', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'14501', RRSK_AE:'62257', RRSK_Var:'47756', RRSK_Utilization:'429.33', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0' },
    { planHead: '3600', particular: 'Other Ele work', actual: '25116', Utilization:'35.7',OBG:'109733', AE:'39214',Var:'-70519',Capital_OBG:'73400', Capital_AE:'22303', Capital_Var:'-51097',Capital_Utilization:'30.39', DRF_OBG:'7045', DRF_AE:'7042', DRF_Var:'-3', DRF_Utilization:'99.96',DF_OBG:'4288', DF_AE:'2095', DF_Var:'-2193', DF_Utilization:'48.86', SF_OBG:'0', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'25000', RRSK_AE:'7774', RRSK_Var:'-17226', RRSK_Utilization:'31.096', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0' },
    { planHead: '4100', particular: 'M & P', actual: '6840', Utilization:'77.8',OBG:'30584', AE:'23800',Var:'-6784',Capital_OBG:'25227', Capital_AE:'15099', Capital_Var:'-10128',Capital_Utilization:'59.85', DRF_OBG:'3505', DRF_AE:'7562', DRF_Var:'4057', DRF_Utilization:'215.75',DF_OBG:'1852', DF_AE:'1139', DF_Var:'-713', DF_Utilization:'61.5', SF_OBG:'0', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'0', RRSK_AE:'0', RRSK_Var:'0', RRSK_Utilization:'', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0' },
    { planHead: '4200', particular: 'w/shop & shed', actual: '17158', Utilization:'44.4',OBG:'80169', AE:'35562',Var:'-44607',Capital_OBG:'79668', Capital_AE:'35086', Capital_Var:'-44582',Capital_Utilization:'44.04', DRF_OBG:'1', DRF_AE:'0', DRF_Var:'-1', DRF_Utilization:'0',DF_OBG:'500', DF_AE:'476', DF_Var:'-24', DF_Utilization:'0', SF_OBG:'0', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'0', RRSK_AE:'0', RRSK_Var:'0', RRSK_Utilization:'0', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0' },
    { planHead: '5100', particular: 'Staff Quarter', actual: '19969' ,Utilization:'104.1',OBG:'35740', AE:'37198',Var:'1458',Capital_OBG:'21191', Capital_AE:'2322', Capital_Var:'-17869',Capital_Utilization:'11.5', DRF_OBG:'8078', DRF_AE:'32294', DRF_Var:'24216', DRF_Utilization:'399.78',DF_OBG:'7471', DF_AE:'2582', DF_Var:'-4889', DF_Utilization:'34.56', SF_OBG:'0', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'0', RRSK_AE:'0', RRSK_Var:'0', RRSK_Utilization:'0', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0' },
    { planHead: '5300', particular: 'Passenger Amm.', actual: '386799', Utilization:'17.1',OBG:'1064576', AE:'182418',Var:'-882158',Capital_OBG:'672702', Capital_AE:'78984', Capital_Var:'-593718',Capital_Utilization:'11.74', DRF_OBG:'0', DRF_AE:'0', DRF_Var:'0', DRF_Utilization:'0',DF_OBG:'6892', DF_AE:'9691', DF_Var:'2799', DF_Utilization:'140.61', SF_OBG:'0', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'384982', RRSK_AE:'93743', RRSK_Var:'-291239', RRSK_Utilization:'24.35', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0'},
    {  planHead: '6400', particular: 'Other Specific Work', actual: '36460', Utilization:'43.8',OBG:'95758', AE:'41979',Var:'-53779',Capital_OBG:'21900', Capital_AE:'5165', Capital_Var:'-16735',Capital_Utilization:'23.58', DRF_OBG:'3270', DRF_AE:'0', DRF_Var:'-3270', DRF_Utilization:'0',DF_OBG:'588', DF_AE:'4331', DF_Var:'3743', DF_Utilization:'36.56', SF_OBG:'0', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'70000', RRSK_AE:'32483', RRSK_Var:'-37517', RRSK_Utilization:'46.404', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0' },
    { planHead: '6500', particular: 'Training/ HRD', actual: '0',  Utilization:'0',OBG:'0' , AE:'0',Var:'0',Capital_OBG:'0', Capital_AE:'0', Capital_Var:'0',Capital_Utilization:'0', DRF_OBG:'0', DRF_AE:'0', DRF_Var:'0', DRF_Utilization:'0',DF_OBG:'0', DF_AE:'0', DF_Var:'0', DF_Utilization:'0', SF_OBG:'0', SF_AE:'0', SF_Var:'0', SF_Utilization:'0', RRSK_OBG:'0', RRSK_AE:'0', RRSK_Var:'0', RRSK_Utilization:'0', Capital_N_OBG:'0', Capital_N_AE:'0', Capital_N_Var:'0', Capital_N_Utilization:'0' },
    // More data...
  ]
  function edit_row(no)
  { document.getElementById("edit_button" +no).style.display="none";
  document.getElementById("save_button" +no).style.display="block";
  }
  // Populate plan head dropdown
  const planHeadDropdown = document.getElementById('planHeadDropdown');
  data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.planHead;
    option.textContent = `${item.planHead}`;
    planHeadDropdown.appendChild(option);
  });
  // Handle search and filtering
  const searchInput = document.getElementById('searchInput');
  const dataBody = document.getElementById('dataBody');
  function updateTable() {
    dataBody.innerHTML = '';
    const selectedPlanHead = planHeadDropdown.value;
    const searchTerm = searchInput.value.toLowerCase();
    data.forEach(item => {
      if (
        (!selectedPlanHead || item.planHead === selectedPlanHead) &&
        (!searchTerm || item.particular.toLowerCase().includes(searchTerm))
      ) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.planHead}</td>
            <td>${item.particular}</td>
            <td>${item.actual}</td>
            <td>${item.OBG}</td>
            <td>${item.AE}</td>
            <td>${item.Var}</td>
            <td>${item.Utilization}</td>
            <td>${item.Capital_OBG}</td>
            <td>${item.Capital_AE}</td>
            <td>${item.Capital_Var}</td>
            <td>${item.Capital_Utilization}</td>
            <td>${item.DRF_OBG}</td>
            <td>${item.DRF_AE}</td>
            <td>${item.DRF_Var}</td>
            <td>${item.DRF_Utilization}</td>
            <td>${item.DF_OBG}</td>
            <td>${item.DF_AE}</td>
            <td>${item.DF_Var}</td>
            <td>${item.DF_Utilization}</td>
            <td>${item.SF_OBG}</td>
            <td>${item.SF_AE}</td>
            <td>${item.SF_Var}</td>
            <td>${item.SF_Utilization}</td>
            <td>${item.RRSK_OBG}</td>
            <td>${item.RRSK_AE}</td>
            <td>${item.RRSK_Var}</td>
            <td>${item.RRSK_Utilization}</td>
            <td>${item.Capital_N_OBG}</td>
            <td>${item.Capital_N_AE}</td>
            <td>${item.Capital_N_Var}</td>
            <td>${item.Capital_N_Utilization}</td>
            
          `;
          dataBody.appendChild(row);
      }
    });
  }
  planHeadDropdown.addEventListener('change', updateTable);
  searchInput.addEventListener('input', updateTable);
  updateTable(); // Initial table update
  
  
  var table = document.getElementById("table"),rIndex;
  for(var i=2; i< table.rows.length; i++)
  {
    table.rows[i].onclick = function()
    {
      rIndex = this.rowIndex;
      console.log(rIndex);
      document.getElementById("ph").value = this.cells[0].innerHTML;
      document.getElementById("pr").value = this.cells[1].innerHTML;
    };
  }
  function editRow()
  {
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("ph").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("pr").value;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  var express = require('express');
  var mysql   = require('mysql');
  var app     = express();
  var cors = require('cors');
  const bodyParser = require('body-parser');
  
  
  var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'product'
  });
  "use strict";
  function IterarCamposEdit(t,n){function i(t){if(null==colsEdi)return!0;
    for(var n=0;n<colsEdi.length;n++)
    if(t==colsEdi[n])
    return!0;
  return!1
  }
  var o=0;
  t.each(function(){o++,"buttons"!=$(this).attr("name")&&i(o-1)&&n($(this))})}function FijModoNormal(t){$(t).parent().find("#bAcep").hide(),$(t).parent().find("#bCanc").hide(),$(t).parent().find("#bEdit").show(),$(t).parent().find("#bElim").show(),$(t).parents("tr").attr("id","")}function FijModoEdit(t){$(t).parent().find("#bAcep").show(),$(t).parent().find("#bCanc").show(),$(t).parent().find("#bEdit").hide(),$(t).parent().find("#bElim").hide(),$(t).parents("tr").attr("id","editing")}function ModoEdicion(t){return"editing"==t.attr("id")}function rowAcep(t){var n=$(t).parents("tr"),i=n.find("td");
  ModoEdicion(n)&&(IterarCamposEdit(i,function(t){var n=t.find("input").val();t.html(n)}),FijModoNormal(t),params.onEdit(n))}function rowCancel(t){var n=$(t).parents("tr"),i=n.find("td");ModoEdicion(n)&&(IterarCamposEdit(i,function(t){var n=t.find("div").html();
  t.html(n)}),FijModoNormal(t))}function rowEdit(t){var n=$(t).parents("tr"),i=n.find("td");
  ModoEdicion(n)||(IterarCamposEdit(i,function(t){var n=t.html(),i='<div style="display: none;">'+n+"</div>",o='<input class="form-control input-sm"  value="'+n+'">';
  t.html(i+o)}),FijModoEdit(t))}function rowElim(t){$(t).parents("tr").remove(),params.onDelete()}function rowAgreg(){if(0==$tab_en_edic.find("tbody tr").length){var t="";
  (i=$tab_en_edic.find("thead tr").find("th")).each(function(){"buttons"==$(this).attr("name")?t+=colEdicHtml:t+="<td></td>"}),$tab_en_edic.find("tbody").append("<tr>"+t+"</tr>")}else{var n=$tab_en_edic.find("tr:last");
  n.clone().appendTo(n.parent());
  var i=(n=$tab_en_edic.find("tr:last")).find("td");
  i.each(function(){"buttons"==$(this).attr("name")||$(this).html("")})}}function TableToCSV(t)
  {
    var n="",i="";
    return $tab_en_edic.find("tbody tr").each(function(){ModoEdicion($(this))&&$(this).find("#bAcep").click();
  var o=$(this).find("td");
  n="",o.each(function(){"buttons"==$(this).attr("name")||(n=n+$(this).html()+t)}),""!=n&&(n=n.substr(0,n.length-t.length)),i=i+n+"\n"}),i}var $tab_en_edic=null,params=null,colsEdi=null,newColHtml='<div class="btn-group pull-right"><button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);"><span class="glyphicon glyphicon-pencil" > </span></button><button id="bElim" type="button" class="btn btn-sm btn-default" onclick="rowElim(this);"><span class="glyphicon glyphicon-trash" > </span></button><button id="bAcep" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowAcep(this);"><span class="glyphicon glyphicon-ok" > </span></button><button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowCancel(this);"><span class="glyphicon glyphicon-remove" > </span></button></div>',colEdicHtml='<td name="buttons">'+newColHtml+"</td>";
  $.fn.SetEditable=function(t){var n={columnsEd:null,$addButton:null,onEdit:function(){},onDelete:function(){},onAdd:function(){}};params=$.extend(n,t),this.find("thead tr").append('<th name="buttons"></th>'),this.find("tbody tr").append(colEdicHtml),$tab_en_edic=this,null!=params.$addButton&&params.$addButton.click(function(){rowAgreg()}),null!=params.columnsEd&&(colsEdi=params.columnsEd.split(",")
  )};