<?php

use App\Role;
use App\User;
use Illuminate\Database\Seeder;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //membuat role admin
        $adminRole = new Role();
        $adminRole->name = "admin";
        $adminRole->display_name = "Admin";
        $adminRole->save();

        //membuat role perusahaan
		$perusahaanRole = new Role();
        $perusahaanRole->name = "perusahaan";
        $perusahaanRole->display_name = "Perusahaan";
        $perusahaanRole->save();

        //membuat role pelamar
        $pelamarRole = new Role();
        $pelamarRole->name = "pelamar";
        $pelamarRole->display_name = "Pelamar";
        $pelamarRole->save();

        //membuat sample admin;
        $admin = new User();
        $admin->name = "Admin";
        $admin->email = "admin@gmail.com";
        $admin->password = bcrypt('rahasia');
        $admin->save();
        $admin->attachRole($adminRole);

        //membuat sample perusahaan
		$perusahaan = new User();
        $perusahaan->name = "sample Perusahaan";
        $perusahaan->email = "perusahaan@gmail.com";
        $perusahaan->password = bcrypt('rahasia');
        $perusahaan->save();
        $perusahaan->attachRole($perusahaanRole);

        //membuat sample pelamar
        $pelamar = new User();
        $pelamar->name = "sample Pelamar";
        $pelamar->email = "pelamar@gmail.com";
        $pelamar->password = bcrypt('rahasia');
        $pelamar->save();
        $pelamar->attachRole($pelamarRole);

    }
}
