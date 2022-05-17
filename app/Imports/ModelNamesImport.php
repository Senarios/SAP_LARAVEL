<?php

namespace App\Imports;

use App\Models\model_names;
use Maatwebsite\Excel\Concerns\ToModel;

class ModelNamesImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new model_names([
            'Demo_Model' => $row[0],
            'Intro_Model' => $row[1],
            'Outro_Model' => $row[2],
        ]);
    }
}
