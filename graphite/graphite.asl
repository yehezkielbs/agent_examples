// Get the last value of the graphite CPU User stats 
// Replace HOSTNAME with your local systems hostname
// Assign this value to the $cpu local variable
$cpu = series("HOSTNAME.cpu.user").last()

// Set the flow 'value' property to the CPU user 
value = $cpu

// Set the 'value_type' to 'percent'
value_type = "percent"

// Send a notification if the CPU is too high
if $cpu > 50 {
  notify(title: "High CPU", message: "CPU usage has exceeded 50%")
}
