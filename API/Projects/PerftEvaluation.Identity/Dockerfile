FROM microsoft/dotnet:3.0-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:3.0-sdk AS build
WORKDIR /src
COPY ["PerftEvaluation.Identity.csproj", "./"]
RUN dotnet restore "./PerftEvaluation.Identity.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "PerftEvaluation.Identity.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "PerftEvaluation.Identity.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "PerftEvaluation.Identity.dll"]
