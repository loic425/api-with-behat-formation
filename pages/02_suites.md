# Suites

Nous pouvons ainsi créer une suite `api_managing_books`:

```yaml {all|3|4|5|7-8|10-11|12-13|15}
default:
    suites:
        api_managing_books:
            contexts:
                - App\Tests\Behat\Context\Hook\DoctrineORMContext

                - App\Tests\Behat\Context\Setup\AdminSecurityContext
                - App\Tests\Behat\Context\Setup\BookContext

                - App\Tests\Behat\Context\Transform\BookContext
                - App\Tests\Behat\Context\Transform\SharedStorageContext

                - App\Tests\Behat\Context\Api\ManagingBooksContext
            filters:
                tags: "@managing_books&&@api"
```
