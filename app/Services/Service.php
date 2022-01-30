<?php

namespace App\Services;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use JetBrains\PhpStorm\Pure;

abstract class Service
{
    #[Pure] public static abstract function init($model): static;
    public abstract function search(string $query);
    public abstract function index();
    public abstract function dt(Builder $query,?array $dtParams = null, ?array $searchableColumns = null): LengthAwarePaginator;
    public abstract function store(object $data);
    public abstract function getOne(int $id);
    public abstract function getBySlug(string $slug);
    public abstract function update(object $data);
    public abstract function destroy(int $id);
}
