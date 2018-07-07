<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLowongansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lowongans', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nama_low');
            $table->date('tgl_mulai');
            $table->string('lokasi');
            $table->integer('gaji');
            $table->text('deskripsi_iklan');
            $table->string('status');
            $table->unsignedInteger('user_id');  
            $table->unsignedInteger('pers_id');
            $table->foreign('pers_id')->references('id')->on('perusahaans')->onDelete('cascade');  
            $table->unsignedInteger('kategori_id');
            $table->foreign('kategori_id')->references('id')->on('kategori_lowongans')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lowongans');
    }
}
