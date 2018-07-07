<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLamaransTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
     {
    //     Schema::create('lamarans', function (Blueprint $table) {
    //         $table->increments('id');
           
    //         $table->unsignedInteger('pel_id');
    //         $table->foreign('pel_id')->references('id')->on('pelamars')->onDelete('cascade');
    //         $table->unsignedInteger('low_id');
    //         $table->foreign('low_id')->references('id')->on('lowongans')->onDelete('cascade');
    //         $table->timestamps();
    //     });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lamarans');
    }
}
