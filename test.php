<?php
//establish connection with database
$conn = new mysqli("localhost","root","","test_manaswini");
if($conn->connect_error)
{
    echo "connection not established";
}
else
{
    //existing data fetch andd load
    function fetchload($conn){
       $sql = "SELECT * FROM user_data order by id DESC LIMIT 1";
       $data = $conn->query($sql);
       $row = $data->fetch_assoc();
      
       print json_encode($row);
    }
    //data savepart
       function datatosave($conn){
        $red_input = ($_POST['red_input']!='')?$_POST['red_input']:0;
        $orange_input = ($_POST['orange_input']!='')?$_POST['orange_input']:0;
        $yellow_input = ($_POST['yellow_input']!='')?$_POST['yellow_input']:0;
        $green_input = ($_POST['green_input']!='')?$_POST['green_input']:0;
       
        $sql = "INSERT INTO user_data ( red_input,orange_input,yellow_input,green_input) VALUES($red_input,$orange_input,$yellow_input,$green_input)";
        if($conn->query($sql))
        echo "Record created succesfully";
    }
    if(isset($_POST['action']) && $_POST['action'] == 'datatosave')
    {
        datatosave($conn);
    }
    if(isset($_POST['action']) && $_POST['action'] == 'fetchload')
    {
        fetchload($conn);
    }

}
?>