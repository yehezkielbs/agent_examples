$data = get(url:"https://api.ipify.org?format=json")
$ip = $data.item("body").item("ip")

text = $ip
