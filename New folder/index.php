<input type="button" onclick="export_data()" value="Export">
<table>
    <tr>
        <td>SN</td>
        <td>Opening Balance</td>
</tr>
<?php
    for($i=1;$i<15;$i++) {
        echo "<tr>
        <td>$i</td>
        <td>1500</td>
        </tr>";
    }
    ?>
</table>
<script>
function export_data(){
    alert('s')
}
</script>
