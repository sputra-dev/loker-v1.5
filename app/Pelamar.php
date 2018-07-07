<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pelamar extends Model
{
	protected $table = 'pelamars';
    protected $fillable = ['telepon','pesan','file_cv','user_id','low_id'];
    public $timestamps = true;

    public function User(){
        return $this->belongsto('App\User','user_id');
    }
    public function Lowongan(){
        return $this->belongsto('App\Lowongan','low_id');
    }
}
