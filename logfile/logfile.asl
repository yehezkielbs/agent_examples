/* Replace HOSTNAME with your local systems hostname */
$matchCount = series("HOSTNAME.launchd").last()

value = $matchCount
