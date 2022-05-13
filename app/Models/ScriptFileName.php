<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScriptFileName extends Model
{
    use HasFactory;

    Protected $fillable = ['filename'];
}
