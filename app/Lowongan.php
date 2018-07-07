<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lowongan extends Model
{
    protected $fillable = ['nama_low','tgl_mulai','lokasi','gaji','deskripsi_iklan','status','pers_id','kategori_id'];
    public $timestamps = true;

    public function Perusahaan(){
        return $this->belongsto('App\Perusahaan','pers_id');
    }
    public function Kategori(){
        return $this->belongsto('App\Kategori_lowongan','kategori_id');
    }
     public function Pelamar(){
        return $this->HasOne('App\Pelamar','low_id');
    }
}
