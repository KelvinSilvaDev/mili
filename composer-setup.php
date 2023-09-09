<?php
copy('https://getcomposer.org/installer', 'composer-setup.php');

$hash = 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02';

if (hash_file('sha384', 'composer-setup.php') === $hash) {
    echo 'Installer verified';
    exec('php composer-setup.php --install-dir=/usr/local/bin --filename=composer');
} else {
    echo 'Installer corrupt';
}

unlink('composer-setup.php');
