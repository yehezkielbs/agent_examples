$data = get(url:"https://api.ipify.org?format=json")
$ip = $data.item("body").item("ip")

value = $ip.split(".").item(0)