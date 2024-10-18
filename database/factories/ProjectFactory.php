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
            'ipRegistration' => $this->faker->unique()->word,
            'title' => $this->faker->sentence,
            'technicalAdviser' => $this->faker->name,
            'author1' => $this->faker->name,
            'author2' => $this->faker->name,
            'author3' => $this->faker->name,
            'author4' => $this->faker->name,
            'course' => $this->faker->randomElement(['IT', 'IS', 'CS']),
            'specialization' => $this->faker->word,
            'yearPublished' => $this->faker->year,
            'acmPaper' => $this->faker->word,
            'fullDocument' => $this->faker->url,
            'pub_mat' => $this->faker->url,
            'approvalForm' => $this->faker->url,
            'sourceCode' => $this->faker->url,
            'best_proj' => $this->faker->boolean,
            'keywords' => $this->faker->words(nb: 3, asText: true),
            'status' => $this->faker->randomElement(['active', 'completed', 'pending'])
        ];
    }
}
