<?php

namespace App\Imports;

use App\Models\Industry_Count;
use Maatwebsite\Excel\Concerns\ToModel;

class IndustoryCountImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Industry_Count([
            'name' => $row[0],
            'value' => $row[1],
        ]);
    }
}
