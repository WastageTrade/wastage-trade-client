VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu-puppet"
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"

  config.vm.define :nginx do |nginx|
    nginx.vm.network "forwarded_port", guest: 80, host: 3000
    nginx.vm.synced_folder "app/", "/var/www/app"

    nginx.vm.provision "puppet" do |puppet|
      puppet.manifest_file = "config.pp"
      puppet.module_path   = "modules"
    end
  end
end
