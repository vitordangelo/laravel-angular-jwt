<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooksTable extends Migration
{
     public function up()
 {
     Schema::create('books', function (Blueprint $table) {
         $table->increments('id');
         $table->string('title');
         $table->string('author_name');
         $table->integer('pages_count');
         $table->integer('user_id')->index();
         $table->timestamps();
     });
 }

    public function down()
    {
        Schema::drop('books');
    }
}
