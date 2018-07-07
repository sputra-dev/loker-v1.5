<?php

use Illuminate\Database\Seeder;
use App\Kategori_lowongan;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kat = new Kategori_lowongan();
        $kat->nama_kategori = "Keuangan";
        $kat->save();

        $kat1= new Kategori_lowongan();
		$kat1->nama_kategori = "IT & Teknik";
		$kat1->save();

        $kat2= new Kategori_lowongan();
		$kat2->nama_kategori = "Seni / Desain";
		$kat2->save();

        $kat3= new Kategori_lowongan();
		$kat3->nama_kategori = "Penjualan / Pemasaran";
		$kat3->save();

        $kat4= new Kategori_lowongan();
        $kat4->nama_kategori = "Kesehatan";
        $kat4->save();

        $kat5= new Kategori_lowongan();
        $kat5->nama_kategori = "Layanan Makanan";
        $kat5->save();
    }
}
