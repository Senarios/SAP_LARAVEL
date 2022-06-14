<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExportScriptsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('export_scripts', function (Blueprint $table) {
            $table->longText('fileName');
            $table->longText('Ind');
            $table->longText('PN');
            $table->longText('LOB1');
            $table->longText('LOB2');
            $table->longText('LOB3');
            $table->longText('Use_Case');
            $table->longText('Intro');
            $table->longText('Protagonist_1');
            $table->longText('BO_1');
            $table->longText('Demo_1');
            $table->longText('Demo_1_key_points');
            $table->longText('Protagonist_2');
            $table->longText('BO_2');
            $table->longText('Demo_2');
            $table->longText('Demo_2_key_points');
            $table->longText('Protagonist_3');
            $table->longText('BO_3');
            $table->longText('Demo_3');
            $table->longText('Demo_3_key_points');
            $table->longText('Protagonist_4');
            $table->longText('BO_4');
            $table->longText('Demo_4');
            $table->longText('Demo_4_key_points');
            $table->longText('Outro');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('export_scripts');
    }
}
