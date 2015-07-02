class common {
  package { 'curl':
    ensure => installed
  }

  package { 'git':
    ensure => present
  }

  package { 'nodejs':
    require => Exec['add-node-package']
  }

  exec { 'add-node-package':
    command => 'curl -sL https://deb.nodesource.com/setup | sudo bash -',
  }

  exec { 'add-bower':
    command => 'npm install -g bower',
    require => Package['nodejs']
  }
}
