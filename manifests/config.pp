Exec {
  path => ['/bin', '/usr/bin'],
  user => 'root'
}

exec { 'apt-get-update':
  command => 'sudo apt-get update'
}

Exec['apt-get-update'] -> Package <| |>

include common
include nginx
