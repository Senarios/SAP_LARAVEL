<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Industry_Count extends Model
{
    use HasFactory;

    Protected $fillable = ['name','value'];
}
