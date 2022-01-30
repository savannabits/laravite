<?php

namespace App\Services;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use JetBrains\PhpStorm\Pure;
use Savannabits\PrimevueDatatables\PrimevueDatatables;

abstract class Service
{
    #[Pure] public static abstract function init($model): static;
    public static abstract function search(string $query);
    public static abstract function index();
    public static function dt(Builder $query,?array $dtParams = null, ?array $searchableColumns = null): LengthAwarePaginator {
        $dt = PrimevueDatatables::of($query);
        if ($dtParams) $dt->dtParams($dtParams);
        if ($searchableColumns) $dt->searchableColumns($searchableColumns);
        return $dt->make();
    }
    public static abstract function store(object $data);
    public abstract function show();
    public static abstract function getOne(int $id);
    public static abstract function getBySlug(string $slug);
    public abstract function update(object $data);
    public abstract function destroy();
}
