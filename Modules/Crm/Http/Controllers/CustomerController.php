<?php

namespace Modules\Crm\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Crm\Entities\Customer;
use Modules\Crm\Services\Customers;

class CustomerController extends Controller
{
    public function __construct(private Customers $service)
    {
    }

    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Crm/Customers/Index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Crm/Customers/Create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param Customer $customer
     * @return Response
     */
    public function show(Customer $customer): Response
    {
        $model = $this->service::init($customer)->show();
        return Inertia::render("Crm/Customers/Details", compact('model'));
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('crm::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
