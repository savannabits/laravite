<?php

namespace Modules\Crm\Services;

use App\Services\Service;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use JetBrains\PhpStorm\Pure;
use Modules\Crm\Entities\Customer;
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

    public static function search(string $query)
    {
        // TODO: Implement search() method.
    }

    public static function index()
    {
        // TODO: Implement index() method.
    }

    public static function store(object $data)
    {
        // TODO: Implement store() method.
    }

    public static function getOne(int $id)
    {
        // TODO: Implement getOne() method.
    }

    public static function getBySlug(string $slug)
    {
        // TODO: Implement getBySlug() method.
    }

    public function update(object $data)
    {
        // TODO: Implement update() method.
    }

    /**
     * @throws \Throwable
     */
    public function destroy(): bool
    {
        $this->model->deleteOrFail();
        return true;
    }

    public function show(): Customer
    {
        return $this->model;
    }
}
