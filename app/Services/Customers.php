<?php

namespace App\Services;

use App\Models\Customer;
use Cassandra\Custom;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use JetBrains\PhpStorm\Pure;
use Savannabits\PrimevueDatatables\PrimevueDatatables;

class Customers extends Service
{

    private Customer $model;

    #[Pure] public static function init($model): static
    {
        $instance = new static();
        $instance->model = $model;
        return $instance;
    }

    public function search(string $query)
    {
        // TODO: Implement search() method.
    }

    public function index()
    {
        // TODO: Implement index() method.
    }

    public function dt(Builder $query, ?array $dtParams = null, ?array $searchableColumns = null): LengthAwarePaginator
    {
        $dt = PrimevueDatatables::of($query);
        if ($dtParams) $dt->dtParams($dtParams);
        if ($searchableColumns) $dt->searchableColumns($searchableColumns);
        return $dt->make();
    }

    /**
     * @throws \Throwable
     */
    public function store(object $data): Customer
    {
        $model = new Customer((array) $data);
        $model->saveOrFail();
        return $model;
    }

    public function getOne(int $id): Model|Collection|Builder|array|null
    {
        return Customer::query()->find($id);
    }

    public function getBySlug(string $slug)
    {
        // TODO: Implement getBySlug() method.
    }

    public function update(object $data)
    {
        // TODO: Implement update() method.
    }

    public function destroy(int $id)
    {
        // TODO: Implement destroy() method.
    }
}
