<?php

namespace Modules\Crm\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Crm\Entities\Customer;
use Modules\Crm\Services\Customers;

class CustomerController extends Controller
{
    public function __construct(private Customers $service)
    {
    }

    /**
     * Display a listing of the resource.
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $query = Customer::query();
        $dt = $this->service::dt($query);
        return \response()->json([
            'success' => true,
            'payload' => $dt,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param Customer $customer
     * @return JsonResponse
     */
    public function destroy(Customer $customer): JsonResponse
    {
        try {
            $this->service::init($customer)->destroy();
            return \response()->json([
                "success" => true,
                "message" => "Customer has been deleted",
                "payload" => null,
            ]);
        } catch (\Throwable $exception) {
            return \response()->json([
                "success" => false,
                "message" => $exception->getMessage(),
            ],500);
        }
    }
}
