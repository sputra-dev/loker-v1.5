<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kategori_lowongan extends Model
{
    protected $fillable = ['nama_kategori'];
    public $timestamps = true;

    public function Lowongan(){
        return $this->HasOne('App\Lowongan','kategori_id');
    }
}
