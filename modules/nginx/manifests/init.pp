class nginx {
  file { '/var/www/':
    ensure => 'directory'
  }

  package { 'nginx':
    ensure => 'present'
  }

  service { 'nginx':
    ensure => running,
    require => Package['nginx']
  }

  file { '/etc/nginx/conf.d/wt_host.conf':
    source  => 'puppet:///modules/nginx/wt_host.conf',
    notify  => Service['nginx']
  }
}
