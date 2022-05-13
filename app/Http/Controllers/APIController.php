<?php

namespace App\Http\Controllers;
use App\Models\sap_data;
use Validator;

use Illuminate\Http\Request;

class APIController extends Controller
{
    public function storeScripts(Request $request){
   
        $intro = $request->intro;
        $outro = $request->outro;
        $bo1 = $request->bo1;
        $bo2 = $request->bo2;
        $bo3 = $request->bo3;
        $bo4 = $request->bo4;
        $demo1 = $request->demo1;
        $demo2 = $request->demo2;
        $demo3 = $request->demo3;
        $demo4 = $request->demo4;

         $sapData = new sap_data();
            $sapData->intro = $intro;
            $sapData->outro = $outro;
            $sapData->bo1 = $bo1;
            $sapData->bo2 = $bo2;
            $sapData->bo3 = $bo3;
            $sapData->bo4 = $bo4;
            $sapData->demo1 = $demo1;
            $sapData->demo2 = $demo2;
            $sapData->demo3 = $demo3;
            $sapData->demo4 = $demo4;

            if($sapData->save())
            {
                $response = [
                'success' => true,
                'response' => 200,
                'message' => 'Record Fetch successfully',
            ];
            return response()->json($response);
            }
            else{
                 $response = [
                'success' => false,
                'response' => 400,
                'message' => 'Something Went Wrong',
            ];
            return response()->json($response);
            }

        
    }

    public function storeScriptsFile(equest $request){
            // 'Ind','PN','Use_Case','Intro','Protagonist 1','BO-1','Demo-1','Demo-1-key-points',
            // 'Protagonist 2', 'BO-2','Demo-2','Demo-2-key-points','Protagonist 3','BO-3' ,
            // 'Demo-3' ,'Demo-3-key-points','Protagonist 4','BO-4','Demo-4','Demo-4-key-points',
            // 'Outro'
        $data = $request->all();
        $fileName = 'tasks.csv';
        $headers = array(
            "Content-type"        => "text/csv",
            "Content-Disposition" => "attachment; filename=$fileName",
            "Pragma"              => "no-cache",
            "Cache-Control"       => "must-revalidate, post-check=0, pre-check=0",
            "Expires"             => "0"
        );
        $columns = array('File_name','Ind','PN','Use_Case','Intro','Protagonist 1','BO-1','Demo-1','Demo-1-key-points',
         'Protagonist 2', 'BO-2','Demo-2','Demo-2-key-points','Protagonist 3','BO-3' ,
         'Demo-3' ,'Demo-3-key-points','Protagonist 4','BO-4','Demo-4','Demo-4-key-points',
         'Outro');

         $callback = function() use($data, $columns) {
            $file = fopen('php://output', 'w');
            fputcsv($file, $columns);

            fputcsv($file, array(
                $data->File_name,
                $data->Ind,
                $data->PN,
                $data->Use_Case,
                $data->Intro,
                $data->Protagonist_1,
                $data->BO_1,
                $data->Demo_1,
                $data->Demo_1_key_points,
                $data->Protagonist_2,
                $data->BO_2,
                $data->Demo_2,
                $data->Demo_2_key_points,
                $data->Protagonist_3,
                $data->BO_3,
                $data->Demo_3,
                $data->Demo_3_key_points,
                $data->Protagonist_4,
                $data->BO_4,
                $data->Demo_4,
                $data->Demo_4_key_points,
                $data->Outro,
            ));
            

            fclose($file);
        };

        return response()->stream($callback, 200, $headers);

    }
}