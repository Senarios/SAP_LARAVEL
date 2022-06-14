<?php

namespace App\Imports;

use App\Models\LineOfBusiness as Business;
use Maatwebsite\Excel\Concerns\ToModel;

class LineOfBusiness implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Business([
            'name' => $row[0],
        ]);
    }
}