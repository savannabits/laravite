<?php
namespace Modules\Crm\Database\factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = \Modules\Crm\Entities\Customer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            "first_name" => $this->faker->firstName,
            "surname" => $this->faker->lastName,
            "email" => $this->faker->unique()->safeEmail,
            "phone_number" => $this->faker->unique()->phoneNumber,
            "active" => $this->faker->boolean
        ];
    }
}

