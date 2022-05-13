<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSapDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sap_datas', function (Blueprint $table) {
            $table->id();
            $table->string('intro')->nullable();
            $table->string('outro')->nullable();
            $table->string('bo1')->nullable();
            $table->string('bo2')->nullable();
            $table->string('bo3')->nullable();
            $table->string('bo4')->nullable();
            $table->string('demo1')->nullable();
            $table->string('demo2')->nullable();
            $table->string('demo3')->nullable();
            $table->string('demo4')->nullable();
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
        Schema::dropIfExists('sap_datas');
    }
}