<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class model_names extends Model
{
    use HasFactory;

    Protected $fillable = ['Demo_Model','Intro_Model','Outro_Model'];
}
