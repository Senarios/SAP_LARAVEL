<?php

namespace App\Http\Controllers;
use App\Models\sap_data;

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
}