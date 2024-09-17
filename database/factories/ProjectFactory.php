<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [    #Temp
            'ipregistry' => $this->faker->unique()->word,
            'title' => $this->faker->sentence,
            'tech_adviser' => $this->faker->name,
            'authors' => $this->faker->name,
            'course' => $this->faker->randomElement(['IT', 'IS', 'CS']),
            'specialization' => $this->faker->word,
            'year' => $this->faker->year,
            'acm' => $this->faker->word,
            'full_document' => $this->faker->url,
            'pub_mat' => $this->faker->url,
            'itso_form' => $this->faker->url,
            'source_code' => $this->faker->url,
            'best_proj' => $this->faker->boolean,
            'keywords' => $this->faker->words(nb: 3, asText: true),
            'status' => $this->faker->randomElement(['active', 'completed', 'pending'])
        ];
    }
}
