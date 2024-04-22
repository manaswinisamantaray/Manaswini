<!DOCTYPE html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script src="index.js"></script>
</head>
<body>
  <form name="traffic_test" id="traffic_test" method="post">
    <div style="margin-left: 20%;">
    <h1 style="margin-left: 20%;">Signal Lights</h1>
    <div style="display: flex;margin-top: 20px;margin-bottom: 30px;" >
        <div id="red" style="padding: 4px;">
            <div id="red_circle" style="width:50px;height:50px;border-radius:50%;background-color: red;margin-left: 20px;margin-top: 30px;" ></div>
            <input type="text" id="red_input" name="red_input" placeholder="Choose the sequence" style="padding:4px;margin-top: 2px;">
        </div>
        <div id="orange" style="padding: 4px;">
            <div id="orange_circle" style="width:50px;height:50px;border-radius:50%;background-color: #FFA500;margin-left: 20px;margin-top: 30px;" ></div>
            <input type="text" id="orange_input" name="orange_input" placeholder="Choose the sequence" style="padding:4px;margin-top: 2px;">
        </div>
        <div id="yellow" style="padding: 4px;">
            <div id="yellow_circle" style="width:50px;height:50px;border-radius:50%;background-color: #FFFF00;margin-left: 20px;margin-top: 30px;" ></div>
            <input type="text" id="yellow_input" name="yellow_input" placeholder="Choose the sequence" style="padding:4px;margin-top: 2px;">
        </div>
        <div id="green" style="padding: 4px;">
            <div id="green_circle" style="width:50px;height:50px;border-radius:50%;background-color: green;margin-left: 20px;margin-top: 30px;" ></div>
            <input type="text" id="green_input" name="green_input" placeholder="Choose the sequence" style="padding:4px;margin-top: 2px;">
        </div>
    </div>
    <div>
        <label for="green_Interval">Green Light Interval</label>
        <input type="text" name="green_Interval" id="green_Interval" placeholder="Give Time in seconds">
    </div>
    <div style="margin-top: 20px;">
        <label for="yellow_Interval">Yellow Light Interval</label>
        <input type="text" name="yellow_Interval" id="yellow_Interval" placeholder="Give Time in seconds">
    </div>
    <div style="margin-left: 20%;margin-top: 40px;">
        <button type="submit" class="btn btn-success" id="saveinput">Start</button>
        <button type="button" class="btn btn-danger" id="stopinput">Stop</button>
    </div>
    </div>
  </form> 
</body>
</html>